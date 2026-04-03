import { Icon as Iconify } from '@iconify/react';

type IconProps = React.ComponentProps<typeof Iconify> & {
    size?: number | string;
};

export default function MyIcon({ size = 32, ...props }: IconProps) {
    return <Iconify width={props.width ?? size} height={props.height ?? size} {...props} />;
}
