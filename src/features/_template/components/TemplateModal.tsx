import type { TemplateItem } from '../types';
import { Modal } from '../../../app/components/Modal';
import { Badge } from '../../../app/components/Badge';
import { Button } from '../../../app/components/Button';

export interface TemplateModalProps {
  item: TemplateItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TemplateModal({
  item,
  isOpen,
  onClose,
}: Readonly<TemplateModalProps>) {
  if (!item) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={item.title}
      titleId="template-item-modal-title"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="coral">{item.category}</Badge>
          <span className="text-xs text-stone-400">Created: {item.createdAt}</span>
        </div>

        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-700">
          {item.description}
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase text-stone-400 tracking-wider mb-2">
            Associated Tags
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-3 border-t border-stone-100">
          <Button type="button" variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button
            type="button"
            variant="primary"
            onClick={() => {
              alert(`Action triggered for ${item.title}`);
              onClose();
            }}
          >
            Perform Action
          </Button>
        </div>
      </div>
    </Modal>
  );
}
