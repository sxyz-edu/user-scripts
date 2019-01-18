declare module '*.scss' {
  const scss: {
    use: () => void;
    unuse: () => void;
  }
  export default scss;
}

/* eslint init-declarations: off */
