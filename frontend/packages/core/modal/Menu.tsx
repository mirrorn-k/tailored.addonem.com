import Modal from "atoms/Modal";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { LinkBox } from "atoms/Link";
import { FlexColumnBox, FlexBox } from "@/atoms/Box";
import { useTheme } from "@mui/material/styles";
import SnsBtns from "components/button/Sns";
import ViewChangeBtn from "components/button/ViewChangeBtn";
import { tMenu } from "types/index";
import * as apiCommon from "functions/api/data/common";
import { useEffect } from "react";

const Main = () => {
  const theme = useTheme();

  const [menus, setMenus] = useState<tMenu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const obj = await apiCommon.menus();
      setMenus(obj);
    };
    fetchData();
  }, []);

  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    console.log("handleMenuOpen");
    setOpen(true);
  };

  const handleMenuClose = () => {
    console.log("handleMenuClose");
    setOpen(false);
  };

  return (
    <>
      <Modal
        title={""}
        actions={<></>}
        open={open}
        width={"xl"}
        onClose={handleMenuClose}
        fullScreen={true}
      >
        <FlexColumnBox gapSize={2}>
          <FlexColumnBox gapSize={1}>
            <Typography
              variant="h2"
              component={"h3"}
              sx={{ borderBottom: "1px solid black" }}
            >
              MENU
            </Typography>
            <FlexColumnBox gapSize={0} sx={{ p: theme.spacing(2) }}>
              <LinkBox href={"/"}>
                <Typography className={"font-tittle"}>HOME</Typography>
              </LinkBox>
              {menus.map((menu) => (
                <LinkBox
                  key={`head-navi-sp-${menu.en}`}
                  onClick={handleMenuClose}
                  href={menu.href}
                >
                  <FlexBox>
                    <Typography
                      className={"font-tittle"}
                      sx={{ width: "100px" }}
                    >{`${menu.en}`}</Typography>
                    <Typography
                      className={"font-tittle"}
                    >{`-${menu.ja}-`}</Typography>
                  </FlexBox>
                </LinkBox>
              ))}
            </FlexColumnBox>
          </FlexColumnBox>

          <FlexColumnBox gapSize={2}>
            <Typography
              variant="h2"
              component={"h3"}
              sx={{ borderBottom: "1px solid black" }}
            >
              SNS
            </Typography>
            <FlexBox className={"SNS"} sx={{ height: 70 }}>
              <SnsBtns />
            </FlexBox>
          </FlexColumnBox>

          <FlexColumnBox gapSize={2}>
            <Typography
              variant="h2"
              component={"h3"}
              sx={{ borderBottom: "1px solid black" }}
            >
              ボタン
            </Typography>

            <FlexBox sx={{}}>
              <ViewChangeBtn />
              <Main />
            </FlexBox>
          </FlexColumnBox>
        </FlexColumnBox>
      </Modal>
      <IconButton
        size="large"
        edge="end"
        aria-label="menu"
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Main;
