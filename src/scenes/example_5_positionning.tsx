import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Circle, Node } from '@motion-canvas/2d/lib/components';
import { createRef } from '@motion-canvas/core/lib/utils';
import { chain } from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {
  const circleA = createRef<Node>();
  const circleB = createRef<Node>();
  const node = createRef<Node>();
  view.add(
    <>
      <Node position={[200, 100]} shadowColor="red" ref={node}>
        <Circle
          position={[0, 100]}
          ref={circleA}
          width={20}
          height={20}
          fill={'black'}
        />
      </Node>
      <Circle ref={circleB} width={10} height={10} fill={'red'} />
    </>
  );
  const defaultPosition = circleB().absolutePosition();
  yield* circleB().absolutePosition(circleA().absolutePosition(), 1);
  yield* chain(circleB().scale(10, 0.5), circleB().scale(1, 0.4));
  yield* circleB().absolutePosition(defaultPosition, 0.7);
});
