import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import { ReactComponent as ChevronRight } from '@/assets/chevron-right.svg'

interface TabContentProps {
  indices: number[]
  activeTab: string
  id: string
}

const sampleListItems = [
  'Suspendisse non urna mi, quis tincidunt eros.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Pellentesque pellentesque arcu a elit congue lacinia.',
]

export const TabContent = ({ indices, activeTab, id }: TabContentProps) => {
  const nodeRef = useRef(null)

  return (
    <div className={activeTab === id ? '' : 'hidden'} key={id}>
      <CSSTransition nodeRef={nodeRef} appear in={activeTab === id} timeout={600} classNames='appear'>
        <article ref={nodeRef} className='text-zinc-500 leading-[1.375rem]' key={id}>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit
              justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse
              non urna mi, quis tincidunt eros. Nullam tellus turpis,
              fringilla sit amet congue ut, luctus a nulla. Donec sit
              amet sapien neque, id ullamcorper diam. Nulla facilisi.
              Pellentesque pellentesque arcu a elit congue lacinia.
            </p>
            <ul className='pl-4 mt-4'>
              {
                indices
                  .map((index) => sampleListItems[index])
                  .map((content, index) => (
                  // since the list of icons is static and won't be modified, it's fine
                  // to use array index as key
                  // eslint-disable-next-line react/no-array-index-key
                    <li className='flex items-center mb-2' key={index}>
                      <ChevronRight className='mr-2' width='7px' height='10px' />
                      {content}
                    </li>
                  ))
              }
            </ul>
          </div>
        </article>
      </CSSTransition>
    </div>
  )
}
