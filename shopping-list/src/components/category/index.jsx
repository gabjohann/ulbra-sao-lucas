import * as React from "react";
import * as Select from "@radix-ui/react-select";
import {
  Sandwich,
  Carrot,
  Beef,
  Apple,
  Milk,
  ChevronDown,
  Check,
} from "lucide-react";

const categories = [
  { value: "padaria", label: "Padaria", icon: <Sandwich size={16} /> },
  { value: "legume", label: "Legume", icon: <Carrot size={16} /> },
  { value: "carne", label: "Carne", icon: <Beef size={16} /> },
  { value: "fruta", label: "Fruta", icon: <Apple size={16} /> },
  { value: "bebida", label: "Bebida", icon: <Milk size={16} /> },
];

export function CategorySelect() {
  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Value placeholder="Selecione uma categoria" />
        <Select.Icon>
          <ChevronDown size={16} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.Viewport>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.icon}
                <span>{category.label}</span>
              </SelectItem>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = React.forwardRef(({ children, ...props }, ref) => (
  <Select.Item ref={ref} {...props}>
    <Select.ItemText>{children}</Select.ItemText>
    <Select.ItemIndicator>
      <Check size={16} />
    </Select.ItemIndicator>
  </Select.Item>
));

export default CategorySelect;
