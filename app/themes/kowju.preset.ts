import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import { button, card, colors, formField, navigation, radius, shadow } from '../../design-system/tokens'

const brand = colors.brand
const gold = colors.gold
const warm = colors.warm

export default {
  preset: definePreset(Aura, {
    primitive: {
      borderRadius: {
        none: radius.none,
        xs: '0.125rem',
        sm: radius.sm,
        md: radius.md,
        lg: radius.lg,
        xl: radius.xl,
      },
      brand: { ...brand },
      gold: { ...gold },
      warm: { ...warm },
    },
    semantic: {
      primary: {
        50: '{brand.50}',
        100: '{brand.100}',
        200: '{brand.200}',
        300: '{brand.300}',
        400: '{brand.400}',
        500: '{brand.500}',
        600: '{brand.600}',
        700: '{brand.700}',
        800: '{brand.800}',
        900: '{brand.900}',
        950: '{brand.950}',
      },
      secondary: {
        50: '{warm.50}',
        100: '{warm.100}',
        200: '{warm.200}',
        300: '{warm.300}',
        400: '{warm.400}',
        500: '{warm.500}',
        600: '{warm.600}',
        700: '{warm.700}',
        800: '{warm.800}',
        900: '{warm.900}',
        950: '{warm.950}',
      },
      accent: {
        50: '{gold.50}',
        100: '{gold.100}',
        200: '{gold.200}',
        300: '{gold.300}',
        400: '{gold.400}',
        500: '{gold.500}',
        600: '{gold.600}',
        700: '{gold.700}',
        800: '{gold.800}',
        900: '{gold.900}',
        950: '{gold.950}',
      },
      formField: {
        paddingX: formField.paddingX,
        paddingY: formField.paddingY,
        sm: {
          fontSize: formField.sm.fontSize,
          paddingX: formField.sm.paddingX,
          paddingY: formField.sm.paddingY,
        },
        lg: {
          fontSize: formField.lg.fontSize,
          paddingX: formField.lg.paddingX,
          paddingY: formField.lg.paddingY,
        },
        borderRadius: formField.borderRadius,
      },
      navigation: {
        fontWeight: navigation.fontWeight,
        letterSpacing: navigation.letterSpacing,
      },
      colorScheme: {
        light: {
          surface: {
            0: colors.white,
            50: '{warm.50}',
            100: '{warm.100}',
            200: '{warm.200}',
            300: '{warm.300}',
            400: '{warm.400}',
            500: '{warm.500}',
            600: '{warm.600}',
            700: '{warm.700}',
            800: '{warm.800}',
            900: '{warm.900}',
            950: '{warm.950}',
          },
          formField: {
            borderColor: '{warm.200}',
            hoverBorderColor: '{warm.300}',
            focusBorderColor: '{primary.color}',
          },
          primary: {
            color: '{primary.800}',
            contrastColor: colors.white,
            hoverColor: '{primary.900}',
            activeColor: '{primary.950}',
          },
        },
      },
    },
    components: {
      button: {
        root: {
          paddingX: button.paddingX,
          paddingY: button.paddingY,
          borderRadius: radius.md,
          sm: {
            fontSize: button.sm.fontSize,
            paddingX: button.sm.paddingX,
            paddingY: button.sm.paddingY,
            iconOnlyWidth: button.sm.iconOnlyWidth,
          },
        },
        label: {
          fontWeight: button.labelFontWeight,
          textTransform: button.labelTextTransform,
          letterSpacing: button.labelLetterSpacing,
        } as {
          fontWeight: string
          textTransform: string
          letterSpacing: string
        },
        text: {
          primary: {
            color: '{primary.600}',
            hoverBackground: '{primary.50}',
            activeBackground: '{primary.100}',
          },
        },
        link: {
          color: '{warm.600}',
          hoverColor: 'transparent',
          activeColor: 'transparent',
        },
      },
      inputtext: {
        root: {
          paddingX: formField.paddingX,
          paddingY: formField.paddingY,
          borderRadius: formField.borderRadius,
          sm: {
            fontSize: formField.sm.fontSize,
            paddingX: formField.sm.paddingX,
            paddingY: formField.sm.paddingY,
          },
          lg: {
            fontSize: formField.lg.fontSize,
            paddingX: formField.lg.paddingX,
            paddingY: formField.lg.paddingY,
          },
        },
      },
      accordion: {
        panel: {
          background: 'transparent',
          borderColor: '{gold.200}',
        },
        header: {
          background: 'transparent',
          hoverBackground: 'transparent',
          activeBackground: 'transparent',
          activeHoverBackground: 'transparent',
          borderColor: '{gold.200}',
          toggleIcon: {
            color: '{gold.600}',
            hoverColor: '{gold.700}',
            activeColor: '{gold.700}',
            activeHoverColor: '{gold.800}',
          },
        },
        content: {
          background: 'transparent',
          borderColor: '{gold.200}',
        },
      },
      card: {
        root: {
          borderRadius: radius.xl,
          shadow: shadow.md,
        },
        body: {
          padding: card.bodyPadding,
        },
        title: {
          fontSize: card.titleFontSize,
          fontWeight: card.titleFontWeight,
        },
      },
    },
  }),
  options: {
    prefix: 'p',
    darkModeSelector: '.kowju-dark',
  },
}
