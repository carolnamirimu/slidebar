import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import withMT from "@material-tailwind/react/utils/withMT";

console.log(fontFamily);
export default withMT({
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-roboto-mono)"],
      },
      flexBasis: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
    },
  },
  plugins: [],
} satisfies Config);
