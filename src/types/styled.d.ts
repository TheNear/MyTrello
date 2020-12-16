import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    size_font: string,
    size_border_radius: string;

    color_background: string,
    color_font: string,
    color_column: string,
    color_card_bg: string,
    color_button: string,
  }
}