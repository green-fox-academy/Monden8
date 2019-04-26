'use strict';
import { Ship } from './Ship';
import { Captain } from './Captain';
import { NormalPirate } from './Normal';

let anyaHajo: Ship = new Ship();
let blackBeard: Captain = new Captain();
let jack: NormalPirate = new NormalPirate(true);
anyaHajo.add(blackBeard);
anyaHajo.add(jack);
jack.toString();

