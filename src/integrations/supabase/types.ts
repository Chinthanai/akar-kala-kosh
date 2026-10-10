export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          location: string
          category: string
          image: string
          images: string[]
          description: string | null
          year: number | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          location: string
          category: string
          image: string
          images?: string[]
          description?: string | null
          year?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          location?: string
          category?: string
          image?: string
          images?: string[]
          description?: string | null
          year?: number | null
          created_at?: string
        }
        Relationships: []
      }
      project_inquiries: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string
        }
        Relationships: []
      }
    }
    Views: { [_ in never]: never }
    Functions: { [_ in never]: never }
    Enums: { [_ in never]: never }
    CompositeTypes: { [_ in never]: never }
  }
}

export type Tables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Row"]
export const Constants = { public: { Enums: {} } } as const
