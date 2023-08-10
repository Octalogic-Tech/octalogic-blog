import { ReactElement } from "react";
import clsx from "clsx";

import Link from "@/components/link/link";

interface LinkWrapperProps {
  condition: string | undefined;
  wrapper: (children: ReactElement) => ReactElement;
  children: ReactElement;
}

const ConditionalLinkWrapper = ({
  condition,
  wrapper,
  children,
}: LinkWrapperProps) => (condition ? wrapper(children) : children);

export function PillButton(props: {
  title: string;
  href?: string;
  className?: string;
}) {
  const { title, href, className = "", ...otherProps } = props;

  return (
    <ConditionalLinkWrapper
      condition={href}
      wrapper={(children: ReactElement) => (
        <Link href={href as string}>
          {children}
        </Link>
      )}
    >
      <button
        {...otherProps}
        className={clsx(
          "text-base rounded-[1.562rem] text-info-contrastText bg-secondary-main py-3 px-8 pill-btn",
          className
        )}
        // style={{
        //   ":hover": {
        //     boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
        //   },
        // }}
      >
        {title}
      </button>
    </ConditionalLinkWrapper>
  );
}

export default PillButton;
