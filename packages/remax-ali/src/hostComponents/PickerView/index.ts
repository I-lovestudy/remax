import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface PickerViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  name?: string;
  className?: string;
  value?: number[];
  indicatorStyle?: React.CSSProperties;
  indicatorClassName?: string;
  maskStyle?: React.CSSProperties;
  maskClassName?: string;
  onChange?: (e: any) => void;
}

export const PickerView: React.ComponentType<PickerViewProps> = createHostComponent<PickerViewProps>('picker-view');
