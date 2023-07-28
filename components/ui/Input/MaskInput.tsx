import { cn } from "@/lib/utils";
import { useState } from "react";
import MaskInput from "react-maskinput";

export interface MaskInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  maskType?: string;
  className?: string;
}

const MaskedInput = ({ className, maskType, placeholder }: MaskInputProps) => {
  const [mask, setMask] = useState("00.00.0000");
  const [maskString, setMaskString] = useState("DD.MM.YYYY");

  const onChange = (e: any) => {
    if (maskType === "date") {
      if (parseInt(e.target.value[6], 10) > 2) {
        setMaskString("MM.DD.YY");
        setMask("00.00.00");
      } else {
        setMaskString("MM.DD.YYYY");
        setMask("00.00.0000");
      }
    } else if (maskType === "phone") {
      setMask("+1 (000) 000 - 0000");
      setMaskString("+1 (000) 000 - 0000");
    }
  };
  return (
    <MaskInput
      // @ts-ignore
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      onChange={onChange}
      maskString={maskString}
      mask={mask}
      size={35}
      showMask
      placeholder={placeholder}
    />
  );
};

export { MaskedInput };
