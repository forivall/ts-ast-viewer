import * as morph from 'ts-morph';
import type { Node } from 'typescript';

export function toStructure(node: Node): morph.Structures | undefined {
  const wrapped = morph.createWrappedNode(node as morph.ts.Node);
  if (morph.Node.hasStructure(wrapped)) {
    return wrapped.getStructure();
  }
}
