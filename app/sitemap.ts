import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://controltech.bg",
      lastModified: new Date(),
    },
    {
      url: "https://controltech.bg/remont-na-laptopi-varna",
      lastModified: new Date(),
    },
    {
      url: "https://controltech.bg/remont-na-kompyutri-varna",
      lastModified: new Date(),
    },
    {
      url: "https://controltech.bg/windows-instalaciya-varna",
      lastModified: new Date(),
    },
    {
      url: "https://controltech.bg/profilaktika-laptop-varna",
      lastModified: new Date(),
    },
  ];
}
