export const downloadCanvasToImage = () => {
  const canvas = document.querySelector<HTMLCanvasElement>("canvas");

  if (canvas) {
    const dataURL = canvas.toDataURL();
    const link = document.createElement("a");

    link.href = dataURL;
    link.download = "canvas.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const toDataURL = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return URL.createObjectURL(blob);
};

export const downloadImage = async (url: string) => {
  const a = document.createElement("a");
  a.href = await toDataURL(url);
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const reader = (file: File) =>
  new Promise<string | ArrayBuffer | null>((resolve, _) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });
