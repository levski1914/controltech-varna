module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/actions/contact.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"602542b64aa444d88d60b4f0160ba7ad02d86023d2":"submitContactForm"},"",""] */ __turbopack_context__.s([
    "submitContactForm",
    ()=>submitContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function serviceLabel(service) {
    const map = {
        diagnostics: "Диагностика",
        windows: "Windows инсталация",
        cleaning: "Профилактика",
        "ssd-upgrade": "SSD upgrade",
        "hardware-repair": "Хардуерен ремонт",
        other: "Друго"
    };
    return map[service] || service;
}
async function submitContactForm(_prevState, formData) {
    const website = String(formData.get("website") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const details = String(formData.get("details") || "").trim();
    const errors = {};
    if (website) {
        return {
            success: true,
            message: "Запитването е изпратено успешно.",
            errors: {}
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
            errors
        };
    }
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !from || !to) {
        return {
            success: false,
            message: "Липсва имейл конфигурация на сървъра. Добави RESEND_API_KEY, CONTACT_FROM_EMAIL и CONTACT_TO_EMAIL.",
            errors: {}
        };
    }
    try {
        const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](apiKey);
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
            html
        });
        if (error) {
            console.error("RESEND_ERROR", error);
            return {
                success: false,
                message: "Възникна проблем при изпращането. Опитай отново.",
                errors: {}
            };
        }
        return {
            success: true,
            message: "Запитването е изпратено успешно.",
            errors: {}
        };
    } catch (error) {
        console.error("CONTACT_FORM_ERROR", error);
        return {
            success: false,
            message: "Възникна неочаквана грешка. Опитай отново.",
            errors: {}
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitContactForm
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitContactForm, "602542b64aa444d88d60b4f0160ba7ad02d86023d2", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/contact.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/contact.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/contact.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "602542b64aa444d88d60b4f0160ba7ad02d86023d2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitContactForm"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/contact.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/contact.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b0494b6b._.js.map