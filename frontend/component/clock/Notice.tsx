"use client";
import ShowAtTime, { ShowAtTimeProps } from "@/atom/timed/ShowAtTime";

type Props = {
  cron?: ShowAtTimeProps["cron"];
  windowMs?: ShowAtTimeProps["windowMs"];
  children?: React.ReactNode;
};

const Main = ({ cron = "* * * * 1", windowMs = 5000, children }: Props) => {
  return (
    <ShowAtTime cron={cron} windowMs={windowMs} mountWhenVisible>
      <style jsx global>{`
        @keyframes demo-pop {
          0% {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          30% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-4px) scale(0.98);
          }
        }
        .demo-banner {
          display: inline-block;
          padding: 12px 16px;
          border-radius: 12px;
          background: #111;
          color: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          /* ★このCSSアニメの終了を ShowAtTime が拾って閉じます */
          animation: demo-pop ${windowMs}ms ease-out forwards;
        }
      `}</style>
      <div className="demo-banner">{children}</div>
    </ShowAtTime>
  );
};

export default Main;
