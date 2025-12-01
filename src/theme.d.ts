import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      subPrimary: string;
      primaryOpacity: string;

      white100: string;
      white200: string;
      white300: string;
      white400: string;
      white500: string;
      white600: string;
      white700: string;

      black: string;
    };

    fontSize: {
      xLarge: string;
      large: string;
      base: string;
      small: string;
      xSmall: string;
    };

    fonts: {
      base: string;
      logo: string;
      weights: {
        thin: number;
        light: number;
        regular: number;
        medium: number;
        bold: number;
      };
    };
  }
}
