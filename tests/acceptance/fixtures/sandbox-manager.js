import { execSync } from 'child_process';
import Sandbox from './sandbox';

const sandboxes = [];

const manager = {
  init() {
    execSync('npm rm -g redoc');
  },
  createSandbox() {
    const newSandbox = new Sandbox();
    sandboxes.push(newSandbox);
    return newSandbox;
  },
  clean() {
    sandboxes.forEach(sandbox => sandbox.destroy());
    sandboxes.length = 0;
    execSync('npm rm -g redoc');
  },
};

beforeAll(() => manager.init());
afterAll(() => manager.clean());

export default manager;
