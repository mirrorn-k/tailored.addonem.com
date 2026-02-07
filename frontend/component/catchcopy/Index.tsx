import HtmlText from "@/atom/Typography";

interface CatchcopyProps {
  text: string;
}
export default function Catchcopy(props: CatchcopyProps) {
  return (
    <HtmlText
      text={props.text}
      component={"h3"}
      sx={{
        lineHeight: { xs: "1.75em", sm: "2.5em" },
        fontSize: "2.0rem",
        fontWeight: "bold",
        p: 2,
      }}
    />
  );
}
