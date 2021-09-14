export const stripPhoneNumber = (input: string): string =>
  input
    .split("")
    .filter((e) => /\d/.test(e))
    .join("");

export const parseCopyright = (input: string): string =>
  input.replace("[year]", String(new Date().getFullYear()));

export const parseAddress = (input: string): string =>
  input.replace(/\n+/g, ", ");

export const shuffleArray = (_array: any[]) => {
  const array = [..._array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function addAnimation(ref: HTMLElement): void {
  function animate() {
    ref.classList.add("animation");
    window.removeEventListener("focus", animate);
  }
  if (document.hasFocus()) animate();
  else window.addEventListener("focus", animate);
}

export function sanitize(input: string, options: SanitizeOptions): string {
  let string = input;
  if (options.singleQuotes) string = string.replace(/'/g, "");
  if (options.doubleQuotes) string = string.replace(/"/g, "");
  if (options.trim) string = string.trim();
  if (options.doubleSpaces) string = string.replace(/\s{2,}/g, " ");
  return string;
}

interface SanitizeOptions {
  singleQuotes?: boolean;
  doubleQuotes?: boolean;
  doubleSpaces?: boolean;
  trim?: boolean;
}
