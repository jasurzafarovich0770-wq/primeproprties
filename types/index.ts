// @ts-ignore
import { Project as PrismaProject } from '@prisma/client'

export type Project = PrismaProject

export interface Lead {
  id: string
  name: string
  phone: string
  message: string | null
  projectId: string | null
  createdAt: Date
}