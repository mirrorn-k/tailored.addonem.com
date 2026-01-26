"use client";

import { tOrganize } from "@/lib/api/organize/type";
import Footer01 from "./Footer01";
import Footer02 from "./Footer02";
import { tSite } from "@/lib/api/site/type";
import { tMenu } from "@/types/index";

interface MainProps {
  organize?: tOrganize;
  menus?: tMenu[];
  footer: tSite["footer"];
}

export default function Main(props: MainProps) {
  const { footer } = props;

  console.log("Footerコンテンツ", footer);

  if (footer.type === "footer01") {
    return <Footer01 {...props} />;
  } else if (footer.type === "footer02") {
    return <Footer02 {...props} />;
  } else {
    console.log("未対応のスタイル", footer);
    return <></>;
  }
}
