import { isPlaceholder } from "@/content/site";
import { clean } from "@/lib/utils";

export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <article className="bg-bone pb-24 pt-32 md:pt-40">
      <div className="u-container">
        <div className="max-w-3xl">
          <h1 className="u-h2">{title}</h1>
          {updatedAt && !isPlaceholder(updatedAt) && (
            <p className="mt-5 text-[0.85rem] text-mute-light">
              Dernière mise à jour : {clean(updatedAt)}
            </p>
          )}
          <div className="mt-12 space-y-10 text-[0.98rem] leading-relaxed text-ink/75 [&_h2]:text-[1.15rem] [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:text-ink [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
