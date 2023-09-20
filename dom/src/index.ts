const a: number = 1;

const inputElement: HTMLInputElement | undefined = document.getElementById(
  "inputName"
) as HTMLInputElement;

const el = document.querySelector<HTMLInputElement>("#inputText");

inputElement?.value;
