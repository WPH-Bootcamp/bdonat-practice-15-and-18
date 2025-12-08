type DataType<T> = T extends "date" ? Date : string;

type SmartDisplayProps<T extends "text" | "date"> = {
  mode: T;
  value: DataType<T>;
};

export function SmartDisplay<T extends "text" | "date">(
  props: SmartDisplayProps<T>
) {
  if (props.mode === "date") {
    return <div>Tanggal : {(props.value as Date).toLocaleDateString()}</div>;
  }
  return <div>Teks : {props.value as string}</div>;
}
