// Shared config — use these exact values everywhere in the project
// Based on user's chosen settings for Brandworks

export const GLASS_CONFIG = {
  mode:                 'prominent' as const,
  displacementScale:    20,
  blurAmount:           0.0,       // zero frost — pure glass, video shows through
  saturation:           150,
  aberrationIntensity:  4,
  elasticity:           0.20,
} as const

// Variants for different use cases
export const GLASS_NAVBAR    = { ...GLASS_CONFIG, cornerRadius: 0,   padding: '0px'        }
export const GLASS_CARD      = { ...GLASS_CONFIG, cornerRadius: 16,  padding: '0px'        }
export const GLASS_BUTTON    = { ...GLASS_CONFIG, cornerRadius: 100, padding: '8px 20px'   }
export const GLASS_PILL      = { ...GLASS_CONFIG, cornerRadius: 999, padding: '6px 14px'   }
export const GLASS_MOBILE    = { ...GLASS_CONFIG, cornerRadius: 0,   blurAmount: 0.05      }
export const GLASS_STATS     = { ...GLASS_CONFIG, cornerRadius: 16,  padding: '24px'       }
export const GLASS_PROJECT   = { ...GLASS_CONFIG, cornerRadius: 12,  padding: '0px'        }
