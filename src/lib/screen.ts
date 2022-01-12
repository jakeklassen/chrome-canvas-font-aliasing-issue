/**
 * Test a rectangle for perfect resolution scaling. Will return the closest
 * resolution or the `minWidth` and `minHeight`.
 * @param containerWidth width you want to test
 * @param containerHeight height you want to test
 * @param minWidth minimum width
 * @param minHeight minimum height
 */
export const getResolution = (
  containerWidth: number,
  containerHeight: number,
  minWidth: number,
  minHeight: number,
) => {
  // If the container is smaller than the minWidth x minHeight, limit
  // to minWidth x minHeight.
  if (containerWidth <= minWidth || containerHeight <= minHeight) {
    return {
      width: minWidth,
      height: minHeight,
      factor: 1,
    };
  }

  // If the container is the exact aspect ratio of the original resolution,
  // return a factor that reflects that.
  if (containerWidth / containerHeight === minWidth / minHeight) {
    const factor = containerWidth / minWidth;

    return {
      width: minWidth * factor,
      height: minHeight * factor,
      factor,
    };
  }

  let factor = 1;
  let width = minWidth * factor;
  let height = minHeight * factor;

  // Lastly, limit scale factor to whole increments while smaller than
  // the container.
  while (width <= containerWidth && height <= containerHeight) {
    factor++;

    width = minWidth * factor;
    height = minHeight * factor;
  }

  factor--;

  return {
    width: minWidth * factor,
    height: minHeight * factor,
    factor,
  };
};

interface ResizeProps {
  canvas: HTMLCanvasElement;
  gameWidth: number;
  gameHeight: number;
}

export const onWindowResize =
  ({ canvas, gameWidth, gameHeight }: ResizeProps) =>
  () => {
    // Scale canvas to fit window while maintaining 16x9
    const { innerWidth, innerHeight } = window;
    const { factor } = getResolution(
      innerWidth,
      innerHeight,
      gameWidth,
      gameHeight,
    );

    canvas.style.transform = `scale(${factor})`;
    canvas.style.left = `${innerWidth / 2 - canvas.width / 2}px`;
    canvas.style.top = `${innerHeight / 2 - canvas.height / 2}px`;
  };
