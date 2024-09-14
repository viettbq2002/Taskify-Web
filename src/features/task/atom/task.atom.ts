import { IItem } from '@/features/task/types/task.type'
import { atom } from 'jotai'
export const taskAtom = atom<IItem | null>(null);