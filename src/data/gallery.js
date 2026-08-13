const unsplashPhoto = (id) =>
  `https://images.unsplash.com/photo-${id}?w=800&h=600&fit=crop&q=80`;

export const gallery = [
  { id: 1, image: unsplashPhoto("1517048676732-d65bc937f952"), span: "row-span-2" },
  { id: 2, image: unsplashPhoto("1504384308090-c894fdcc538d"), span: "" },
  { id: 3, image: unsplashPhoto("1475721027785-f74eccf877e2"), span: "" },
  { id: 4, image: unsplashPhoto("1519389950473-47ba0277781c"), span: "" },
  { id: 5, image: unsplashPhoto("1531482615713-2afd69097998"), span: "row-span-2" },
  { id: 6, image: unsplashPhoto("1522071820081-009f0129c71c"), span: "" },
  { id: 7, image: unsplashPhoto("1529156069898-49953e39b3ac"), span: "" },
];