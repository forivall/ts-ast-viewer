import {StructureKind} from 'ts-morph';
import { CompilerApi, SyntaxKind } from "../compiler";

export function getSyntaxKindName(api: CompilerApi, kind: SyntaxKind) {
  return getKindCacheForApi(api)[kind];
}

const kindCache: { [packageName: string]: { [kind: number]: string } } = {};

function getKindCacheForApi(api: CompilerApi) {
  if (kindCache[api.tsAstViewer.packageName] == null) {
    kindCache[api.tsAstViewer.packageName] = getKindNamesForApi(api);
  }
  return kindCache[api.tsAstViewer.packageName];
}

function getKindNamesForApi(api: CompilerApi) {
  // some SyntaxKinds are repeated, so only use the first one
  const kindNames: { [kind: number]: string } = {};
  for (const name of Object.keys(api.SyntaxKind).filter(k => isNaN(parseInt(k, 10)))) {
    const value = (api.SyntaxKind as any)[name] as number;
    if (kindNames[value] == null) {
      kindNames[value] = name;
    }
  }
  return kindNames;
}

export function getStructureKindName(kind: StructureKind) {
  switch (kind) {
    case StructureKind.AssertEntry: return 'AssertEntryStructure';
    case StructureKind.CallSignature: return 'CallSignatureDeclarationStructure';
    case StructureKind.Class: return 'ClassDeclarationStructure';
    case StructureKind.ClassStaticBlock: return 'ClassStaticBlockDeclarationStructure';
    case StructureKind.Constructor: return 'ConstructorDeclarationStructure';
    case StructureKind.ConstructorOverload: return 'ConstructorDeclarationOverloadStructure';
    case StructureKind.ConstructSignature: return 'ConstructSignatureDeclarationStructure';
    case StructureKind.Decorator: return 'DecoratorStructure';
    case StructureKind.Enum: return 'EnumDeclarationStructure';
    case StructureKind.EnumMember: return 'EnumMemberStructure';
    case StructureKind.ExportAssignment: return 'ExportAssignmentStructure';
    case StructureKind.ExportDeclaration: return 'ExportDeclarationStructure';
    case StructureKind.ExportSpecifier: return 'ExportSpecifierStructure';
    case StructureKind.Function: return 'FunctionDeclarationStructure';
    case StructureKind.FunctionOverload: return 'FunctionDeclarationOverloadStructure';
    case StructureKind.GetAccessor: return 'GetAccessorDeclarationStructure';
    case StructureKind.ImportDeclaration: return 'ImportDeclarationStructure';
    case StructureKind.ImportSpecifier: return 'ImportSpecifierStructure';
    case StructureKind.IndexSignature: return 'IndexSignatureDeclarationStructure';
    case StructureKind.Interface: return 'InterfaceDeclarationStructure';
    case StructureKind.JSDoc: return 'JSDocStructure';
    case StructureKind.JSDocTag: return 'JSDocTagStructure';
    case StructureKind.JsxAttribute: return 'JsxAttributeStructure';
    case StructureKind.JsxElement: return 'JsxElementStructure';
    case StructureKind.JsxSelfClosingElement: return 'JsxSelfClosingElementStructure';
    case StructureKind.JsxSpreadAttribute: return 'JsxSpreadAttributeStructure';
    case StructureKind.Method: return 'MethodDeclarationStructure';
    case StructureKind.MethodOverload: return 'MethodDeclarationOverloadStructure';
    case StructureKind.MethodSignature: return 'MethodSignatureStructure';
    case StructureKind.Module: return 'ModuleDeclarationStructure';
    case StructureKind.Parameter: return 'ParameterDeclarationStructure';
    case StructureKind.Property: return 'PropertyDeclarationStructure';
    case StructureKind.PropertyAssignment: return 'PropertyAssignmentStructure';
    case StructureKind.PropertySignature: return 'PropertySignatureStructure';
    case StructureKind.SetAccessor: return 'SetAccessorDeclarationStructure';
    case StructureKind.ShorthandPropertyAssignment: return 'ShorthandPropertyAssignmentStructure';
    case StructureKind.SpreadAssignment: return 'SpreadAssignmentStructure';
    case StructureKind.TypeAlias: return 'TypeAliasDeclarationStructure';
    case StructureKind.TypeParameter: return 'TypeParameterDeclarationStructure';
    case StructureKind.VariableDeclaration: return 'VariableDeclarationStructure';
    case StructureKind.VariableStatement: return 'VariableStatementStructure';
  }
}
