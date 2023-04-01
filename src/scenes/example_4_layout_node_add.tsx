import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Circle, Rect, Txt, Layout } from '@motion-canvas/2d/lib/components';

export default makeScene2D(function* (view) {
  const node = (
    <Layout>
      <Circle />
      <Layout>
        <Rect />
        <Txt>Hi</Txt>
      </Layout>
    </Layout>
  );
  node.add(<Rect width={10} height={100} fill="red" />);
  view.add(node);
});
