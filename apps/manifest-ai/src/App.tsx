import { ProgressBar, StepIndicator, TemplateForm, Navigation, StorySummary } from './components'
import { useDiscovery } from './hooks/useDiscovery'
import { TEMPLATES } from './data/templates'

function App() {
  const {
    currentStep,
    template,
    values,
    showSummary,
    isFirst,
    isLast,
    filledCount,
    totalFields,
    completedSteps,
    updateField,
    goNext,
    goPrev,
    goToStep,
  } = useDiscovery()

  return (
    <div className="min-h-screen bg-[var(--color-hearthstone)]">
      {/* Fixed header */}
      <header className="sticky top-0 z-10 bg-[var(--color-hearthstone)] border-b border-[var(--color-dry-moss)] pb-4 pt-6 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-xl font-[family-name:var(--font-content)] text-[var(--color-forest-floor)]">
              Manifest AI
            </h1>
            <p className="text-xs font-[family-name:var(--font-content)] text-[var(--color-lichen)] mt-0.5">
              8 conversations that shape everything you build
            </p>
          </div>

          {/* Progress bar */}
          <ProgressBar filled={filledCount} total={totalFields} />

          {/* Step circles */}
          <StepIndicator
            currentStep={currentStep}
            completedSteps={completedSteps}
            onStepClick={goToStep}
          />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        {showSummary ? (
          <StorySummary
            values={values}
            onBack={goPrev}
            onEditStep={goToStep}
          />
        ) : (
          <>
            <TemplateForm
              template={template}
              values={values}
              onFieldChange={updateField}
            />
            <Navigation
              currentStep={currentStep}
              totalSteps={TEMPLATES.length}
              isFirst={isFirst}
              isLast={isLast}
              onPrev={goPrev}
              onNext={goNext}
              templateColor={template.color}
            />
          </>
        )}
      </main>
    </div>
  )
}

export default App
