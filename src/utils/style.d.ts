declare module "*.scss" {
  const scss: {
    use: () => void;
    unuse: () => void;
  };
  export default scss;
}
