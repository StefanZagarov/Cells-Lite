import { ReactNode } from "react";

interface RowProps {
    children: ReactNode;
}

export default function Row({ children }: RowProps) {
    return (
        <tr>
            <td>{children}</td>
        </tr>
    );
}