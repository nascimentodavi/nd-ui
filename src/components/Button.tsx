import BsButton, { type ButtonProps as BsButtonProps } from "react-bootstrap/Button";

export type ButtonProps = BsButtonProps & {
    loading?: boolean;
};

export function Button({ loading, disabled, children, ...rest }: ButtonProps) {

    return (
        
        <BsButton disabled={disabled || loading} {...rest}>
            {loading ? "Loading" : children}
        </BsButton>
    )

}