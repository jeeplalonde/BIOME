/**
 * useDiscovery — manages all state for the discovery wizard.
 *
 * WHY: Single hook owns all form data and navigation.
 * Components stay pure — they render, this hook thinks.
 * Data shape matches our field_node keys for easy Supabase sync in M3.
 */

import { useState, useCallback, useMemo } from 'react'
import { TEMPLATES, TOTAL_FIELDS } from '../data/templates'

export type FieldValues = Record<string, string>

export function useDiscovery() {
  const [currentStep, setCurrentStep] = useState(0)
  const [values, setValues] = useState<FieldValues>({})
  const [showSummary, setShowSummary] = useState(false)

  const template = TEMPLATES[currentStep]
  const isFirst = currentStep === 0
  const isLast = currentStep === TEMPLATES.length - 1

  const updateField = useCallback((key: string, value: string) => {
    setValues(prev => ({ ...prev, [key]: value }))
  }, [])

  const goNext = useCallback(() => {
    if (isLast) {
      setShowSummary(true)
    } else {
      setCurrentStep(prev => prev + 1)
    }
  }, [isLast])

  const goPrev = useCallback(() => {
    if (showSummary) {
      setShowSummary(false)
    } else if (!isFirst) {
      setCurrentStep(prev => prev - 1)
    }
  }, [isFirst, showSummary])

  const goToStep = useCallback((step: number) => {
    setShowSummary(false)
    setCurrentStep(step)
  }, [])

  const filledCount = useMemo(() => {
    return Object.values(values).filter(v => v.trim().length > 0).length
  }, [values])

  const completedSteps = useMemo(() => {
    return TEMPLATES.map(t =>
      t.fields.every(f => (values[f.key] ?? '').trim().length > 0)
    )
  }, [values])

  return {
    currentStep,
    template,
    values,
    showSummary,
    isFirst,
    isLast,
    filledCount,
    totalFields: TOTAL_FIELDS,
    completedSteps,
    updateField,
    goNext,
    goPrev,
    goToStep,
  }
}
