import type { TemplateItem } from '../types';
import { Card } from '../../../app/components/Card';
import { Badge } from '../../../app/components/Badge';
import { Button } from '../../../app/components/Button';

export interface TemplateCardProps {
  item: TemplateItem;
  onSelect: (item: TemplateItem) => void;
}

export function TemplateCard({ item, onSelect }: Readonly<TemplateCardProps>) {
  return (
    <Card interactive className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="coral">{item.category}</Badge>
          <span className="text-xs text-stone-400">{item.createdAt}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-stone-600 line-clamp-2 mb-4">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="w-full"
        onClick={() => onSelect(item)}
      >
        View Details
      </Button>
    </Card>
  );
}
