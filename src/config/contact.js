import { PROFILE } from '../data/index.js'

// Centralized contact email for the live portfolio.
export const CONTACT_EMAIL = 'mhmd_ebrahim_1@outlook.com'

// Keep existing PROFILE consumers synchronized without duplicating contact data.
PROFILE.email = CONTACT_EMAIL
