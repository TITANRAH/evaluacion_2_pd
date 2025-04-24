'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateAfterAction() {
  revalidatePath('/', 'layout');
}
