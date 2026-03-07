"use server";

import { Resend } from "resend";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    phone?: string;
    email?: string;
    service?: string;
    details?: string;
  };
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function serviceLabel(service: string) {
  const map: Record<string, string> = {
    diagnostics: "Диагностика",
    windows: "Windows инсталация",
    cleaning: "Профилактика",
    "ssd-upgrade": "SSD upgrade",
    "hardware-repair": "Хардуерен ремонт",
    other: "Друго",
  };

  return map[service] || service;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const website = String(formData.get("website") || "").trim();
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const details = String(formData.get("details") || "").trim();

  const errors: ContactFormState["errors"] = {};
  if (website) {
    return {
      success: true,
      message: "Запитването е изпратено успешно.",
      errors: {},
    };
  }
  if (name.length < 2) {
    errors.name = "Моля, въведи име.";
  }

  if (phone.length < 6) {
    errors.phone = "Моля, въведи валиден телефон.";
  }

  if (!isValidEmail(email)) {
    errors.email = "Моля, въведи валиден имейл.";
  }

  if (!service) {
    errors.service = "Моля, избери услуга.";
  }

  if (details.length < 10) {
    errors.details = "Опиши накратко проблема или нужната услуга.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Формата има нужда от корекции.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return {
      success: false,
      message:
        "Липсва имейл конфигурация на сървъра. Добави RESEND_API_KEY, CONTACT_FROM_EMAIL и CONTACT_TO_EMAIL.",
      errors: {},
    };
  }

  try {
    const resend = new Resend(apiKey);

    const subject = `Ново запитване: ${serviceLabel(service)} | ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>Ново запитване от сайта</h2>
        <p><strong>Име:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Имейл:</strong> ${email}</p>
        <p><strong>Услуга:</strong> ${serviceLabel(service)}</p>
        <p><strong>Описание:</strong></p>
        <p>${details.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("RESEND_ERROR", error);

      return {
        success: false,
        message: "Възникна проблем при изпращането. Опитай отново.",
        errors: {},
      };
    }

    return {
      success: true,
      message: "Запитването е изпратено успешно.",
      errors: {},
    };
  } catch (error) {
    console.error("CONTACT_FORM_ERROR", error);

    return {
      success: false,
      message: "Възникна неочаквана грешка. Опитай отново.",
      errors: {},
    };
  }
}
