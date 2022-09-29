import { FC } from "react";

interface AProps extends React.HTMLAttributes<HTMLElement> {}

const A:FC<AProps> = () => {
    return <div>A</div>;
}

export default A;