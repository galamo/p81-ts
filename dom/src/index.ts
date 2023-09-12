const a: number = 1;

const inputElement: HTMLInputElement | undefined = document.getElementById(
  "inputName"
) as HTMLInputElement;

inputElement?.value;
