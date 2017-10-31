/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// Making the global '$' available for TypeScript usage
declare var $: any;
