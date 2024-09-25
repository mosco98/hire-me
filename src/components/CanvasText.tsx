import { useEffect, useRef } from "react";

const CanvasText = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    // Set up the text properties
    const text = "Circular Reveal Text";
    const fontSize = 40; // Set your desired font size
    ctx.font = `bold ${fontSize}px sans-serif`;

    // Measure the width and height of the text
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = fontSize; // Approximate height from font size

    // Set canvas size based on text dimensions with some padding
    const padding = 500;
    canvas.width = textWidth + padding * 2;
    canvas.height = textHeight + padding * 2;

    // Redefine the context after resizing the canvas
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Create a radial gradient
    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      50,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2
    );

    // Define gradient color stops
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.5, "yellow");
    gradient.addColorStop(1, "blue");

    // Fill the entire canvas with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Save canvas state before clipping
    ctx.save();

    // Define a circular clipping region with arc, centered on the text
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, textWidth / 2, 0, Math.PI * 2); // Clip to a circle around the text
    ctx.clip();

    // Draw the text (only part within the circle will be shown)
    ctx.fillStyle = "black"; // Text color
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    // Restore canvas state (remove clipping region)
    ctx.restore();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CanvasText;
