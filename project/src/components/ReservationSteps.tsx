import React from 'react';
import { Check } from 'lucide-react';

type Step = {
  id: string;
  title: string;
  completed: boolean;
  current: boolean;
};

type ReservationStepsProps = {
  steps: Step[];
  currentStep: string;
};

export function ReservationSteps({ steps, currentStep }: ReservationStepsProps) {
  return (
    <nav className="flex flex-col gap-2 w-64 p-4 bg-white rounded-lg shadow">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex items-center p-3 rounded-lg transition-colors ${
            step.current
              ? 'bg-red-50 text-red-700'
              : step.completed
              ? 'text-green-700'
              : 'text-gray-500'
          }`}
        >
          <div className={`mr-3 flex-shrink-0 ${
            step.completed ? 'text-green-500' : ''
          }`}>
            {step.completed ? (
              <Check className="w-5 h-5" />
            ) : (
              <div className="w-5 h-5 border-2 rounded-full" />
            )}
          </div>
          <span className="text-sm font-medium">{step.title}</span>
        </div>
      ))}
    </nav>
  );
}