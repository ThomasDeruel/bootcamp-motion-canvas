import { makeProject } from '@motion-canvas/core';

import example_1 from './scenes/example_1?scene';
import example_1_sequencial from './scenes/example_1_sequencial?scene';
import example_2_timer from './scenes/example_2_timer?scene';
import example_3_fg_all from './scenes/example_3_fg_all?scene';
import example_4_layout from './scenes/example_4_layout?scene';
import example_4_layout_node_add from './scenes/example_4_layout_node_add?scene';
import example_5_positionning from './scenes/example_5_positionning?scene';

export default makeProject({
  scenes: [example_1],
});
