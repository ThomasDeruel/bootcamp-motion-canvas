import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Circle } from '@motion-canvas/2d/lib/components';
import { createRef } from '@motion-canvas/core/lib/utils';
import { ThreadGenerator } from '@motion-canvas/core/lib/threading';

export default makeScene2D(function* (view) {
  const circle = createRef<Circle>();
  view.add(<Circle ref={circle} width={100} height={100} x={100} />);

  yield* flicker(circle());
});

function* flicker(circle: Circle): ThreadGenerator {
  yield* circle.fill('gray', 1);
  circle.fill('black');
  yield;
  circle.fill('gray');
  yield;
}
