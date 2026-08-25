export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Retire les crochets des placeholders pour un affichage propre,
 * y compris lorsqu'ils n'entourent qu'une partie de la chaîne
 * (ex. « [NOMBRE] stages » -> « NOMBRE stages »).
 */
export function clean(value: string): string {
  return value.replace(/[[\]]/g, "").trim();
}

/** Initiales utilisées pour le logo et la favicon. */
export function monogram(value: string): string {
  const words = clean(value)
    .split(/[\s/–—-]+/)
    .filter(Boolean);
  if (words.length === 0) return "—";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}
