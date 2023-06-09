import { ThemingProps } from '@chakra-ui/react'
import { mainnet, goerli, sepolia, polygon, optimism, arbitrum } from '@wagmi/chains'

export const SITE_NAME = 'anon.codes'
export const SITE_DESCRIPTION = 'Zero-knowledge access'
export const SITE_URL = 'https://anon-codes.vercel.app'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = { initialColorMode: THEME_INITIAL_COLOR }

export const SOCIAL_MEDIUM = '@0xjjpa'
export const SOCIAL_TWITTER = '0xjjpa'
export const SOCIAL_GITHUB = '0xjjpa'
export const SOCIAL_LINKEDIN = 'jjperezaguinaga'
export const SOCIAL_DISCORD = '123456789123456789'

export const INFURA_KEY = '817597f04d6941649c41255a1b10e815'
export const NETWORKS = [mainnet, goerli, sepolia, polygon, optimism, arbitrum]