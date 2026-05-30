// 由 SaaS Factory 自動生成，請勿手動編輯（升級時會被覆蓋）。
// 客戶：示範 SaaS 客戶（Pipeline Cloud）
// subdomain：demo-saas

export const projectConfig = {
  client: {
  "clientName": "示範 SaaS 客戶",
  "brandName": "Pipeline Cloud",
  "contactEmail": "demo-saas@saas-factory.dev",
  "subdomain": "demo-saas"
},
  siteTypes: {
  "enabled": [
    "lp",
    "blog",
    "cms"
  ],
  "lpCount": 2
},
  modules: {
    enabled: [
  "blog.newsletter",
  "cms.about",
  "cms.faq",
  "lp.exit-intent",
  "marketing.email-campaigns"
] as const,
  },
  integrations: {
  "payments": [
    "stripe"
  ],
  "shipping": [],
  "invoice": {
    "providers": [
      "ezpay"
    ],
    "mode": "scheduled"
  },
  "notifications": [
    "email"
  ]
},
  theme: {
  "presetId": "cyber-tech",
  "primaryColor": "#5b6cff",
  "accentColor": "#00d4a8",
  "radius": "subtle",
  "font": "sans",
  "density": "normal",
  "darkMode": "both",
  "motionLevel": 4
},
  i18n: {
  "defaultLocale": "zh-TW",
  "enabledLocales": [
    "zh-TW"
  ],
  "multiCurrency": false,
  "multiTimezone": false
},
  deploy: {
  "target": "vercel",
  "repoName": "demo-saas",
  "environments": [
    "production"
  ],
  "privateRepo": false
},
} as const;

export type ProjectConfig = typeof projectConfig;
